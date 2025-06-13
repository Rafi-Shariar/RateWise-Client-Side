export const CalculateAvgRatting = (reviewData) =>{

    let totalRatting = 0;

    reviewData.forEach(data => {
        totalRatting += data.rating;
    })

    const avgRatting = totalRatting / reviewData.length
    console.log(avgRatting);

    return avgRatting;


}