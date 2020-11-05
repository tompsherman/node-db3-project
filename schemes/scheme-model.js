// scheme-model
const db = require('../data/db-config')

module.exports = {
    find(){
        return db('schemes')
    },
    findById(id){
        return db('schemes')
        .where({id})
        .first()
    },
    findSteps(id){
        return db('schemes as s')
        .join('steps as p', 's.id', 'p.scheme_id')
        .select('s.scheme_name', 'p.instructions', 'p.step_number')
        .where({'s.id': id})
        .orderBy('p.step_number')
    },
    async add(scheme){
        const [id] = await
        db('schemes')
        .insert(scheme)
            return db('schemes')
            .where({id})
            .first()
    },

    async addStep(step, scheme_id){
        // db('steps').insert(step)
        //     return db('steps').select().where({scheme_id}).orderBy('step_number')
        const res = await db('steps').insert(step)
            return db('steps').select().where({scheme_id}).orderBy('step_number')
    },

    async update(changes, id){
        const count = await db('schemes').where({id}).update(changes)
        if (count){ 
            return db('schemes')
            .where({id})
            .first()
        } else {
            return Promise.resolve(null)
        }
    },
    async remove(id){
        const scheme = await db('schemes').where({id}).first()
        if (!scheme){
            return Promise.resolve(null)
        } else {
            await db('schemes')
            .where({id})
            .del()
            return Promise.resolve(scheme)
        }
    }
}