export const resetToStart = (appData, onComplete) => {
    const { elementsData, elements, restarted } = appData

    /** reset all items */
    for (let i = 0; i < elementsData.length; ++i) {
        const { key, isStartRender } = elementsData[i]
        elements[key].container.renderable = isStartRender
    }

    /** onComplete */
    let newNum = restarted || 0 
    onComplete({ restarted: ++newNum })
}
