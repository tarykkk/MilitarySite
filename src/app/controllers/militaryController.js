const militaryController = {};


militaryController.mechanized_troops = async (req, res) => {
    try {
        res.render('mechanized_troops');
    } catch (error) {
        console.log('error GET /mechanized_troops :>> ', error.stack);
        res.sendStatus(400);
    }
}; 


militaryController.army_fly = async (req, res) => {
    try {
        res.render('army_fly');
    } catch (error) {
        console.log('error GET /army_fly :>> ', error.stack);
        res.sendStatus(400);
    }
}; 


militaryController.ppo = async (req, res) => {
    try {
        res.render('ppo');
    } catch (error) {
        console.log('error GET /ppo :>> ', error.stack);
        res.sendStatus(400);
    }
}; 


militaryController.tank_troops = async (req, res) => {
    try {
        res.render('tank_troops');
    } catch (error) {
        console.log('error GET /tank_troops :>> ', error.stack);
        res.sendStatus(400);
    }
}; 


militaryController.special_force = async (req, res) => {
    try {
        res.render('special_forces');
    } catch (error) {
        console.log('error GET /special_force :>> ', error.stack);
        res.sendStatus(400);
    }
}; 


export {
    militaryController
};