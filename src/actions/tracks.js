var mockApiData = [

    {
        id: 1,
        name: 'Hello'
    },
    {
        id: 2,
        name: 'Madam'
    },
    {
        id: 3,
        name: 'Wellow'
    },{
        id: 4,
        name: 'Broken'
    },

]

export const getTracks = () => dispatch =>  {
    setTimeout(() => {
        console.log('I got track');
        dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData})
    }, 2000)
}
