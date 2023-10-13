const MissionUtils = require('@woowacourse/mission-utils');
const { CONSTANTS,OUTPUT_MSG } = require('../models/constants');
const InputController = require('../controller/InputController')

class GameStart {
    constructor() {
        this.INPUT_CON = new InputController();
        this.playGame();
    }
 
    playGame() {
        MissionUtils.Console.print(`${OUTPUT_MSG.START_MSG}`);
        this.#coachesName();
        this.#menuRecommend();
        this.#printResult();
    }

    #coachesName() {
        // MissionUtils.Console.print(`${OUTPUT_MSG.GET_COACHES_NAME}`);
        this.INPUT_CON.getCoachesName();
        this.#coachesCantEat();
    }

    #coachesCantEat() {
        this.INPUT_CON.getCoachesCantEat();
    }
    #menuRecommend() {
        this.INPUT_CON.findingMenu();
    }
    #printResult() {
        MissionUtils.Console.print(`${OUTPUT_MSG.MENU_RESULT}`);
        MissionUtils.Console.print(`${OUTPUT_MSG.WEEK_DAYS}`);
        MissionUtils.Console.print(`[ ${OUTPUT_MSG.CATEGORY} ${CONSTANTS.CATEGORY.join(' | ')} ]`);
        this.INPUT_CON.printCoachesMenu();
        MissionUtils.Console.print(`${OUTPUT_MSG.FINISH}`);

    }


}

module.exports = GameStart;