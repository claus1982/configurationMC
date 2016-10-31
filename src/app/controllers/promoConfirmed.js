angular.module('app')
  .controller('promoConfirmedCtrl', function ($scope, $state, dataTableResources) {
    $scope.model = $scope.model || {};

    $scope.options = {
      addMode: false,
      editMode: true,
      forwardMode: false,
      isEditing: false,
      deleteMode: false,
      copyMode: false,
      showFilters: false,
      rowSelection: true,
      multiSelect: false,
      autoSelect: false,
      decapitate: false,
      largeEditDialog: false,
      boundaryLinks: false,
      limitSelect: true,
      pageSelect: true
    };




    function init() {


      $scope.tipoPromo = $state.params.tipoPromo;
      $scope.codicePromo = $state.params.codicePromo;
      $scope.items = $state.params.items;
      console.log("tipoPromo", $scope.tipoPromo);
      console.log("codicePromo", $scope.codicePromo);

      $scope.currentState = $state.$current.name;
      console.log("current state:",$scope.currentState);
      $scope.title = $scope.codicePromo;

      $scope.columns = dataTableResources["promo.detail"][$scope.tipoPromo].columns;


      $scope.submit = function()
      {
        console.log("myform",$scope.myForm);
      };


      //funzione per gestire la disibilitazione dei campi da popolare
      $scope.isDisabled = function(col, item)
      {
        if (!col.editable)
        return true;
        if (col.mutuallyExclusive)
        {
          return item[col.mutuallyExclusive]
        }
      };

      $scope.confirmed = function (item)
      {
        angular.forEach($scope.columns,function(column){
          console.log("field name: ",column.model);
          console.log("field value: ",item[column.model]);
        });
      };

    }

    init();

  })



