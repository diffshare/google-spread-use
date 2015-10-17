class RootDirective implements ng.IDirective {

    restrict:string = "E";
    scope:Object = {};
    bindToController:Boolean = true;
    controller = RootController;
    controllerAs = "ctrl";
    templateUrl:string = "templates/root.html";
}

class RootController {

    private list:Array<any>;

    constructor(private $scope:ng.IScope, private List:ListService) {
        this.fetch();
    }

    async fetch() {
        this.list = await this.List.fetch();
        this.$scope.$apply();
        //console.log(this.list);
    }
}

angular.module("app").directive("root", ()=> new RootDirective());
