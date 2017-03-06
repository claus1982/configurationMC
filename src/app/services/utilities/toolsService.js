( function () {
  'use strict';
  angular.module('app').factory('toolsService', function () {

    return {
      'getObjPath': function (o, path) {
        if (path) {
          var logicPath = path.split("."),
            oPart = o[logicPath[0]];
          for (var p = 1; p < logicPath.length && angular.isDefined(oPart); p++) {
            oPart = oPart[logicPath[p]];
          }
          return oPart;
        }
        return o;
      },
      'toCamelCase': function (str) {
        return str.toLowerCase().replace(/[- \t]+([a-z\d])/g, function (c) {
          return c[1].toUpperCase()
        })
      },
      'fixPath': function (path) {
        var separator = CONSTANTS.PATH_SEPARATOR;
        return (path + separator).replace(/[\/\\]+/g, separator);
      },
      'getElementByPath': function getObjPath(srcObject, path) {
        var logicPath = path.split("."),
          oPart = o[logicPath[0]];
        for (var p = 1; p < logicPath.length && angular.isDefined(oPart); p++) {
          oPart = oPart[logicPath[p]];
        }
        return oPart;
      },
      'concatPaths': function () {
        var args = arguments;
        if (arguments.length === 1 && Array.isArray(arguments[0])) {
          args = arguments[0];
        }
        if (args.length > 1) {
          var paths = [],
            separator = CONSTANTS.PATH_SEPARATOR;
          for (var id in args) {
            if (args.hasOwnProperty(id)) {
              paths.push(args[id]);
            }
            ;
          }
          var tmpPath = this.fixPath(paths.join(separator)),
            tmpArrPath = tmpPath.split(separator),
            subDirsToPop = 0;
          while (tmpArrPath[tmpArrPath.length - 1] === '..' || subDirsToPop > 0) {
            if (tmpArrPath[tmpArrPath.length - 1] === '..') {
              subDirsToPop++;
            } else {
              subDirsToPop--;
            }
            tmpArrPath.pop();
          }
          return tmpArrPath.join(separator);
        } else if (args.length === 1) {
          return this.fixPath(args[0]);
        }
      },
      'cleanObject': function (obj, config) {
        config = config || {};


        //tratta i null come undefined, default true
        config.removeNull = config.removeNull === true;
        //tratta le strighe vuote come undefined, default true
        config.removeEmptyString = config.removeEmptyString === true;
        //elimina o pone undefined i campi undefined, stringa vuota(se abilitato) e null(se abilitato) Default: true
        config.delete = config.delete === true;

        config.keepEmptyObjects = config.keepEmptyObjects === true;

        config.slimDownArray = config.slimDownArray === true;

        config.copySrc = config.copySrc === true;


        function _cleanUp(obj) {
          for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
              if (angular.isUndefined(obj[p])) {
                if (config.delete) {
                  delete obj[p];
                } else {
                  obj[p] = undefined;
                }
              }
              if ((config.removeNull && obj[p] === null)
                || (config.removeEmptyString && obj[p] === "")) {
                if (config.delete) {
                  delete obj[p];
                } else {
                  obj[p] = null;
                }
              } else if (angular.isObject(obj[p]) && !angular.isDate(obj[p])) {
                _cleanUp(obj[p]);
                if ((config.delete && !config.keepEmptyObjects) && ((angular.isArray(obj[p]) && obj[p].length === 0) || Object.keys(obj[p]).length === 0)) {
                  delete obj[p];
                }
              }
            }
          }
          if (angular.isArray(obj) && config.slimDownArray) {
            for (var i = obj.length - 1; i >= 0; i--) {
              if (angular.isUndefined(obj[i])) {
                obj.splice(i, 1);
              }
            }
          }
          return obj;
        }

        return _cleanUp(config.copySrc ? angular.copy(obj) : obj);
      },
      'flagToBool': function (flag) {
        var trueFlagRegExp = /^(?:y(?:es)?|s(?:[iì])?|ok)$/i;
        if (typeof flag === 'boolean') {
          return flag;
        } else if (angular.isString(flag)) {
          return (flag || "").trim().match(trueFlagRegExp) !== null;
        }
        return !!flag;
      },
      'resetTime': function (dt) {
        dt.setHours(0);
        dt.setMinutes(0);
        dt.setSeconds(0);
        dt.setMilliseconds(0);
        return dt;
      }
    };
  });
}());


