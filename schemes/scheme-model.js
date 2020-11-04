// scheme-model
const db = require('../data/db-config')

module.exports = {
    find(){
        return db('schemes')
    },
    findById(id){
        return db('schemes').where({id}).first()
    },
    findSteps(id){
        return db('schemes as s').join('steps as p', 's.id', 'p.scheme_id').select('s.scheme_name', 'p.instructions', 'p.step_number').where({'s.id': id}).orderBy('p.step_number')
    },
    add(){
        return
    },
    addStep(){
        return
    },
    update(){
        return
    },
    remove(){
        return
    }
}