import maximumScore from "../../src/DP/maximumScore"

test("Input: nums = [1,2,3], multipliers = [3,2,1]; Output: 14", () => {
    const nums = [1,2,3]
    const multipliers = [3,2,1]
    expect(maximumScore(nums, multipliers)).toBe(14)
})

test("Input: nums = [-5,-3,-3,-2,7,1], multipliers = [-10,-5,3,4,6]; Output: 102", () => {
    const nums = [-5,-3,-3,-2,7,1]
    const multipliers = [-10,-5,3,4,6] 
    expect(maximumScore(nums, multipliers)).toBe(102)
})

test("Time Limit Exceeded without DP Memo", () => {
    const nums = [830,388,289,14,-221,610,163,444,-750,-217,-235,-882,746,-907,67,-71,-990,400,-54,-114,-100,233,667,612,-812,-471,-639,-306,-95,524,-198,-520,-652,704,-697,-43,-539,-105,-160,838,499,-109,-977,975,658,-250,593,154,-777,496,747,307,-340,403,-749,-185,721,327,-851,-112,770,-14,754,-242,-220,-776,-66,348,-707,-693,9,-354,741,129,234,638,404,-408,-30,422,-234,818,-627,706,-752,-699,-773,-786,241,432,273,272,-57,878,-149,-547,491,519,870,700,476,-99,902,-878,-237,-549,445,-372,277,-486,872,-569,-687,339,653,-564,862,898,-962,306,668,-143,344,-312,108,-536,-453,-52,627,-225,-28,403,-422,367,133,970,-575,353,347,275,-876,337,594,441,-498,-875,-934,133]
    const multipliers = [-844,-363,797,480,141,733,-935,842,160,-928,787,-895,-742,-963,889,-713,-264,-400,117,163,68,-286,-810,-365,180,-690,-558,-409,290,51,-272,-454,-110,850,578,131,-913,675,817,380,410,860,-441,56,-80,-650,-474,858,269]
    expect(maximumScore(nums, multipliers)).toBe(11042056)
})