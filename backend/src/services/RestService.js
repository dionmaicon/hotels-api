import Dao from './Dao.js';

class RestService {

    constructor(model) {
        this.dao = new Dao(model);
    }

    getAll() {
        return this.dao.getAll();
    }

    getOne(id) {
        return this.dao.getOne(id);
    }

    save(params) {
        return this.dao.save(params);
    }

    update(id, params) {
        return this.dao.update(id, params);
    }

    delete(id) {
        return this.dao.delete(id);
    }

}


export default RestService;