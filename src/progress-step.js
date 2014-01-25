var progressSteps = (function(){
var _placeHolderId;
var _idx = 0;

/**
 * Constructs the progress step placeholder with the
 * contents passed as steps.
 * @param placeHolderId - id of the <ul> element where progress step to be shown
 * @param steps Labels for each step
 */
function initialize(placeHolderId, steps) {
    var _plcHolder;

    _placeholderId = "#" + placeHolderId;
    _plcHolder = $(_placeholderId);

    for (var k = 0; k <= steps.length - 1; k++) {
        _plcHolder.append("<li>" + steps[k] + "</li>");
    }

}

/**
 * Set the first step as in progress and the bubble animates
 */
function start() {
    _idx = 0;
    setPosition(_idx);
}

/**
 * Move to next step in the progress step
 */
function moveNext() {
    setPosition(_idx++);
}

/**
 * Set a specific step to error.
 * @param idx - optional. If not, it would set the current step as errored.
 *
 */
function setError(idx) {
    if (!idx) {
        idx = _idx;
    }
    setPositionAsError(idx);
}

/**
 * Move to specific step in the progress step
 * @param idx
 */
function setPosition(idx) {
    if (idx > 0){
        $(_placeholderId + " li").eq(idx-1).removeClass("in-progress");
        $(_placeholderId + " li").eq(idx-1).addClass("onsuccess");
    }

    $(_placeholderId + " li").eq(idx).addClass("in-progress");
}

/**
 * Set a specific step to error.
 * @param idx - optional. If not, it would set the current step as errored.
 *
 */
function setPositionAsError(idx) {
    $(_placeholderId + " li").eq(idx).removeClass("in-progress");
    $(_placeholderId + " li").eq(idx).addClass("onerror");
}

function reset() {

}

return {
    initialize:initialize,
    start:start,
    moveNext:moveNext,
    setError:setError
};
})();