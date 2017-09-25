"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var product_list_component_1 = require('./product-list.component');
var product_detail_component_1 = require('./product-detail.component');
var convert_to_spaces_pipe_1 = require('../shared/convert-to-spaces.pipe');
var star_component_1 = require('../shared/star.component');
var router_1 = require('@angular/router');
var product_guard_service_1 = require('./product-guard.service');
var product_service_1 = require('./product.service');
var ProductModule = (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule.forChild([
                    { path: 'products', component: product_list_component_1.ProductListComponent },
                    { path: 'products/:id',
                        canActivate: [product_guard_service_1.ProductGuardService],
                        component: product_detail_component_1.ProductDetailComponent }
                ])
            ],
            declarations: [
                product_list_component_1.ProductListComponent,
                product_detail_component_1.ProductDetailComponent,
                convert_to_spaces_pipe_1.ConvertToSpacesPipe,
                star_component_1.StarComponent
            ],
            providers: [
                product_service_1.ProductService,
                product_guard_service_1.ProductGuardService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ProductModule);
    return ProductModule;
}());
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map