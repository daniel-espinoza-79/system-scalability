import CreatePurchaseProductDto from './create-purchase-product';

class CreatePurchasesProductsDto {
  id: string;

  totalCost: number;

  deliveryDay: Date;

  deadline: string;

  purchaseProducts: CreatePurchaseProductDto[];
}

export default CreatePurchasesProductsDto;
