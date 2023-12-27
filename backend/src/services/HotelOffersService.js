import { HotelOffers } from "../models/HotelOffers.js";
import RestService from "./RestService.js";

class HotelOffersService extends RestService {
    constructor() {
        super(HotelOffers)
    }

    getAllPaginated(query) {
        let condition = getCondition(query);
        const { limit, offset } = getPagination(query.page, query.limit);

        return HotelOffers.paginate(condition, { offset, limit })
        .then((data) => {
            return {
            totalItems: data.totalDocs,
            data: data.docs,
            totalPages: data.totalPages,
            currentPage: data.page - 1,
            };
        })
        .catch((err) => {
            return {
            data: [],
            message:
                err.message || "Not Found.",
            };
        });
    }
}

const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;

    return { limit, offset };
};
  
const getCondition = (query) => {
    const { cityName, hotelName, hotelIds, priceRange, currency } = query;
    let condition = {};

    if (cityName) {
        condition['hotel.address.cityName'] = { $regex: new RegExp(cityName), $options: "i" };
    }

    if (hotelIds) {
        const ids = hotelIds.split(",").map(id => id);
        console.log('idss :>> ', ids);
        if (ids.length > 0) {
            condition['hotel.id'] = { $in: ids };
        }
    }

    if (hotelName) {
        condition['hotel.name'] = { $regex: new RegExp(hotelName), $options: "i" };
    }

    if (priceRange && currency) {

        let values = priceRange.split("-");
        let range = values.filter(v => v !== "");

        if (range.length > 1) {
        condition['offers.price.total'] = { $gte: range[0] }
        condition['offers.price.total'] = Object.assign( condition['offers.price.total'], { $lte: range[1] });
        condition['offers.price.currency'] = currency
        }

        if (range.length === 1) {
        if (range[0] === "") {
            condition['offers.price.total'] = { $gte: 0 }
        } else {
            condition['offers.price.total'] = { $gte: range[0] }
        }
        condition['offers.price.currency'] = currency
        }
    }
    console.log('condition :>> ', condition);
    return condition;

};

export default HotelOffersService;
