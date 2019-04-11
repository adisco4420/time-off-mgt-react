const config = require('./knexfile');
const knex = require('knex')(config.development);

// knex.on('connected', () => {
//     console.log('Connected to DB')
// })
// knex.on('error', (err) => console.log(err))

// knex.raw('SELECT VERSION()')
//     .then(version => {
//         console.log('DB VERSION', version)
//     }, err => console.log(err) )
// const version = await knex.raw('SELECT VERSION()')
(async () => {
    try {
        const employee = {
            employee_id: 'LU-00001',
            first_name: 'Sodiq',
            last_name: 'Alabi',
            gender: 'male',
            dob: '2019-04-02',
            phone: '09064155137',
            email: 'adisco4420@mail.com',
            department: 'Software'
        }
        const result = await knex('employees').insert(employee);
        console.log(result);
        
        // const version = await knex.raw('SELECT VERSION()');
        // console.log(version)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    
})();