import { AbstractControl, ValidationErrors} from '@angular/forms';
import { ProductService } from '../../sharedModule/services/product.service';
import { map } from 'rxjs/operators';

export class TitleValidators {
    static shouldBeUnique(productService: ProductService) {
        return (control: AbstractControl): Promise<ValidationErrors | null> => {
            return new Promise((resolve, reject) => {
                productService.getProduct(control.value).pipe(map(res => res))
                    .subscribe((products => {
                        if (products) {
                            resolve({shouldBeUnique: true});
                        } else {
                            resolve(null);
                        }
                    }));
            });
        };
    }
}
