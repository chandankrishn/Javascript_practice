function useCallback(callback)
{
    callback(1);
    callback(2);
    callback(3);
}

function callback(sentence) {
    console.log(sentence);
    // TODO: print out sentence
}
useCallback(callback)

// TODO: execute useCallback with the callback as the argument
