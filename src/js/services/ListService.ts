class ListService {

    constructor(private $http:ng.IHttpService) {
    }

    public fetch():ng.IPromise<Array<any>> {
        let url:string = "https://spreadsheets.google.com/feeds/cells/1UX5JseKusqnzfCTrK5LKRi607m2Ezh-WupcwysWogyk/od6/public/values?alt=json";
        return this.$http.get(url).then(this.format);
    }

    private format(input:any):Array<any> {
        var key = {};
        var output = [];
        input.data.feed.entry.forEach((entry:any)=> {
            let cell:any = entry.gs$cell;
            if (cell.row == "1") {
                key[cell.col] = cell.$t;
            }
            else {
                let index = parseInt(cell.row) - 2;
                if (!output[index]) output[index] = {};
                output[index][key[cell.col]] = cell.$t;
            }
        });
        return output;
    }
}

angular.module("app").service("List", ListService);
