// thisArg 받는 메소드 _ forEach

var report = {
    sum : 0,
    count : 0,

    add : function() {
        var args = Array.from(arguments);
        args.forEach(function(entry) {
            this.sum += entry; // report.sum
            this.count++; // report.count
        }, this); // this = report 지정
    },

    average : function() {
        return this.sum / this.count;
    }
};

report.add(60, 85, 95);
console.log(report.sum, report.count, report.average()); // 240 3 80