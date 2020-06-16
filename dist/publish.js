"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
const helper = __importStar(require("jsdoc/util/templateHelper"));
const Emitter_1 = require("./Emitter");
const logger_1 = require("./logger");
function publish(data, opts) {
    logger_1.setVerbose(!!opts.verbose);
    logger_1.setDebug(!!opts.debug);
    if (!opts.generationStrategy) {
        opts.generationStrategy = 'documented';
    }
    logger_1.debug(`publish(): Generation strategy: '${opts.generationStrategy}'`);
    if (opts.generationStrategy === 'documented') {
        data(function () {
            if (this.undocumented) {
                if ((!this.comment) || (this.comment === '')) {
                    logger_1.debug(`publish(): ${logger_1.docletDebugInfo(this)} removed`);
                    return true;
                }
                else {
                    logger_1.debug(`publish(): ${logger_1.docletDebugInfo(this)} saved from removal`);
                }
            }
            return false;
        }).remove();
    }
    else if (opts.generationStrategy === 'exported') {
        logger_1.warn(`Note: The 'exported' generation strategy is still an experimental feature for the moment, thank you for your comprehension. `
            + `Feel free to contribute in case you find a bug.`);
    }
    const docs = data().get().filter(d => !d.inherited || d.overrides);
    const emitter = new Emitter_1.Emitter(opts);
    emitter.parse(docs);
    if (opts.destination === 'console') {
        console.log(emitter.emit());
    }
    else {
        try {
            fs.mkdirSync(opts.destination);
        }
        catch (e) {
            if (e.code !== 'EEXIST') {
                throw e;
            }
        }
        const pkgArray = helper.find(data, { kind: 'package' }) || [];
        const pkg = pkgArray[0];
        let definitionName = 'types';
        if (pkg && pkg.name) {
            definitionName = pkg.name.split('/').pop() || definitionName;
        }
        const out = path.join(opts.destination, opts.outFile || `${definitionName}.d.ts`);
        fs.writeFileSync(out, emitter.emit());
    }
}
exports.publish = publish;
//# sourceMappingURL=publish.js.map