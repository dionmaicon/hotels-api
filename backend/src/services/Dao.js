
class Dao {

    constructor(model) {
        this.model = model
    }

    getAll() {

        return this.model.find().then(entries => {
            return entries;
        }).catch(err => {
            return {
                success: false,
                message: err.message
            }
        });

    }

    getOne(id) {
        return this.model.findById(id)
            .then(response => {
                return response;
            }).catch(err => {
                return {
                    success: false,
                    message: err.message
                }
            });
    }

    save(params) {

        return this.model.create(params)
            .then(response => {
                return response;
            }).catch(e => {
                return {
                    success: false,
                    message: e.message
                }
            })
    }

    update(id, params) {

        return this.model.findByIdAndUpdate(id, params, { new: true } )
            .then(status => {
                const [updated] = status;

                if (updated > 0) {
                    return true;
                }

                return false;

            }).catch(err => {
                return {
                    success: false,
                    message: err.message
                }
            });

    }

    delete(id) {
        return this.model.findByIdAndRemove(id)
            .then(status => {

                if (status > 0) {
                    return true
                }

                return false;
            })
            .catch(err => {
                return err;
            });
    }

}

module.exports = Dao;
