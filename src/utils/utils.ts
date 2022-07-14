export const filterObj = (obj: any) => {
    const _newObj: any = {};
    // eslint-disable-next-line prefer-const
    for (let key in obj) {
        if (
            (obj[key] === 0 || obj[key] === false || obj[key]) &&
            obj[key]?.toString()?.replace(/(^\s*)|(\s*$)/g, '') !== ''
        ) {
            _newObj[key] = obj[key];
        }
    }
    return _newObj;
};
