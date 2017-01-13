export class Listing {
  constructor(
    location: string,
    public $key: string,
    public date: number,
    type: string,
    owner: string,
    price: string,
    description: string,
    created_at: string,
    image1: string,
    image2?: string,
    image3?: string,
    public name?: string,
  ) {}
}
