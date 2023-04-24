export const formatNumber = (string) => 
{
    var numsStr = string.replace(/[^0-9]/g,'');
    return parseInt(numsStr);
}