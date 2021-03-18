"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Position = exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee(id, name, sal) {
        this.empId = id;
        this.empName = name;
        this.salary = sal;
    }
    Employee.prototype.displayDetail = function () {
        console.log("EmpId: " + this.empId + ",EmpName: " + this.empName + ",Salary: " + this.salary);
    };
    return Employee;
}());
exports.Employee = Employee;
// var empObject=new Employee(101,"Narendra",4000);
//  console.log(empObject.empName);
//  empObject.displayDetail();
var Position = /** @class */ (function (_super) {
    __extends(Position, _super);
    function Position(id, name, sal, post, address) {
        var _this = _super.call(this, id, name, sal) || this;
        _this.post = post;
        _this.address = address;
        return _this;
    }
    Position.prototype.displayDetail = function () {
        console.log("EmpId: " + this.empId + ",EmpName: " + this.empName + ",Salary: " + this.salary + ",Post: " + this.post + ",Address:" + this.address);
    };
    return Position;
}(Employee));
exports.Position = Position;
// var posObj=new Position(101,"Narendra",40000,"Java Developer","Hyderabad");
// posObj.displayDetail();
