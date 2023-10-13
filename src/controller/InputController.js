const MissionUtils = require('@woowacourse/mission-utils');
const { SAMPLE ,CONSTANTS,OUTPUT_MSG,INPUT_MSG} = require('../models/constants')

class InputController {
    getCoachesName = () => {
        MissionUtils.Console.readLine((`${OUTPUT_MSG.GET_COACHES_NAME}`),(names) =>{
            // MissionUtils.Console.print(`${names}`);
            CONSTANTS.COACHES = names.split(',');
        } )
    }

    getCoachesCantEat = () => {
        CONSTANTS.COACHES.map((coach) => {
            this.#inputCoachesMenu(coach)
        })
    }

    #inputCoachesMenu = (coach) => {
        // MissionUtils.Console.print(`${coach}${INPUT_MSG.GET_MENU}`);
        MissionUtils.Console.readLine((`${OUTPUT_MSG.GET_COACHES_NAME}`),(menu) =>{
            // MissionUtils.Console.print(`${menu}`);
            CONSTANTS.CANT_EAT[coach] = menu.split(',');
        } )
    }

    findingMenu = () => {
        this.#setMenuCategory();
        this.#setCoachesMenu();
    }
    #setMenuCategory = () => {
        for (let i = 0; i < Object.keys(SAMPLE).length; i ++) {
            const idx = MissionUtils.Random.pickNumberInRange(1, 5)
            CONSTANTS.CATEGORY.push(Object.keys(SAMPLE)[idx-1]);
        }
    }
    #setCoachesMenu = () => {
        CONSTANTS.COACHES.map((coach) => {
            CONSTANTS.COACHES_MENU[coach] = [];
            this.#findingMenu(coach,[]);
        })
    }
    #findingMenu = (coach,menu_lst) => {
        for (let i = 0; i < Object.keys(SAMPLE).length; i ++) {
            const menu_idx = parseInt(MissionUtils.Random.shuffle(SAMPLE)) - 1
            menu_lst.push(SAMPLE[CONSTANTS.CATEGORY[i]].split(', ')[menu_idx]);
        }
        CONSTANTS.COACHES_MENU[coach] = menu_lst;
    };

    printCoachesMenu = () => {
        CONSTANTS.COACHES.map((coach) => {
            MissionUtils.Console.print(`[ ${coach} | ${CONSTANTS.COACHES_MENU[coach].join(' | ')} ]`)
        })
    }
}

module.exports = InputController;