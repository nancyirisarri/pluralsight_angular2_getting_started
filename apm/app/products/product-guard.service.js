"use strict";
var ProductGuardService = (function () {
    function ProductGuardService(_router) {
        this._router = _router;
    }
    ProductGuardService.prototype.canActivate = function (route) {
        var id = +route.url[1].path;
        if (isNaN(id) || id < 1) {
            alert("Invalid product Id");
            this._router.navigate(['/products']);
            return false;
        }
        ;
        return true;
    };
    return ProductGuardService;
}());
//# sourceMappingURL=product-guard.service.js.map