import { AbstractControl, ValidationErrors} from '@angular/forms';
import { ProductService } from '../../sharedModule/services/product.service';

export class TitleValidators {
    productService: ProductService;

    shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            this.productService.getProduct(control.value).toPromise().then(product => {
                resolve(product);
            }).catch(err => resolve(err));
        });
    }
}