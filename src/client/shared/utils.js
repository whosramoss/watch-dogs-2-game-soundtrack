export function setTextByDevice(type, value) {
    if (type === 'web') {
        return value.map((item, index) => ({
            id: index + 1,
            content: item.trim(),
        }));
    }

    return [{
        id: 1,
        content: value.join(' ').replace(/\s(?=\w+\s)/g, ' ').replace(/\s(?=[.,])/g, '')
    },];
}
