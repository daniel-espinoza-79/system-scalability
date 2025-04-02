class JustProduct {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public stock: number,
    public price: number,
    public isAvailable: boolean,
    public createdAt: Date,
    public updatedAt: Date,
    public categoryId: string,
    public brandId: string
  ) {}
}

export default JustProduct;
