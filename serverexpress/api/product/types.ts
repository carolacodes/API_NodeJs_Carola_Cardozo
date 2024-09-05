type filterByPrice = "lower" | "higher";

export interface ISearchParams {
    category?: string;
    salersId?: string;
    filterByPrice?: filterByPrice;
    priceRange?: string;
    page?: string;
    limit?: string;
    keyword?: string;
}