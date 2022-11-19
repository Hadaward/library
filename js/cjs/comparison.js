module.exports = {
    compareObjectKeys(source, target) {
        const sourceKeys = Object.keys(source);
        const targetKeys = Object.keys(target);
    
        return sourceKeys.length === targetKeys.length
                && sourceKeys.every(key => targetKeys.includes(key))
                && targetKeys.every(key => sourceKeys.includes(key));
    },

    compareShallowObject(source, target) {
        if (!this.compareObjectKeys(source, target))
            return false;
        
        for(const [key, value] of Object.entries(source)) {
            if (target[key] !== value)
                return false; 
        }
    
        return true;
    },

    compareDeepObject(source, target) {
        if (!this.compareObjectKeys(source, target))
            return false;
        
        for(const [key, value] of Object.entries(source)) {
            const value2 = target[key];
    
            if (value !== null && value2 !== null && typeof value === "object" && typeof value2 === "object") {
                if (!this.compareDeepObject(value, value2))
                    return false;
            } else if (value2 !== value)
                return false;
        }
    
        return true;
    }
}