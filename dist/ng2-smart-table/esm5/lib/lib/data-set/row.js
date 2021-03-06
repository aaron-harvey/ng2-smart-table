import { Cell } from './cell';
var Row = /** @class */ (function () {
    function Row(index, data, _dataSet) {
        this.index = index;
        this.data = data;
        this._dataSet = _dataSet;
        this.isSelected = false;
        this.isInEditing = false;
        this.cells = [];
        this.process();
    }
    Row.prototype.getCell = function (column) {
        return this.cells.find(function (el) { return el.getColumn() === column; });
    };
    Row.prototype.getCells = function () {
        return this.cells;
    };
    Row.prototype.getData = function () {
        return this.data;
    };
    Row.prototype.getIsSelected = function () {
        return this.isSelected;
    };
    Row.prototype.getNewData = function () {
        var values = Object.assign({}, this.data);
        this.getCells().forEach(function (cell) { return values[cell.getColumn().id] = cell.newValue; });
        return values;
    };
    Row.prototype.setData = function (data) {
        this.data = data;
        this.process();
    };
    Row.prototype.process = function () {
        var _this = this;
        this.cells = [];
        this._dataSet.getColumns().forEach(function (column) {
            var cell = _this.createCell(column);
            _this.cells.push(cell);
        });
    };
    Row.prototype.createCell = function (column) {
        var defValue = column.settings.defaultValue ? column.settings.defaultValue : '';
        var value = typeof this.data[column.id] === 'undefined' ? defValue : this.data[column.id];
        return new Cell(value, this, column, this._dataSet);
    };
    return Row;
}());
export { Row };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm93LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNldC9yb3cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUk5QjtJQU9FLGFBQW1CLEtBQWEsRUFBWSxJQUFTLEVBQVksUUFBaUI7UUFBL0QsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUFZLFNBQUksR0FBSixJQUFJLENBQUs7UUFBWSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBTGxGLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0IsVUFBSyxHQUFnQixFQUFFLENBQUM7UUFJdEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFFRCxxQkFBTyxHQUFQLFVBQVEsTUFBYztRQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFNBQVMsRUFBRSxLQUFLLE1BQU0sRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFRCxzQkFBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxxQkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCwyQkFBYSxHQUFiO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx3QkFBVSxHQUFWO1FBQ0UsSUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQTNDLENBQTJDLENBQUMsQ0FBQztRQUMvRSxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQscUJBQU8sR0FBUCxVQUFRLElBQVM7UUFDZixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVELHFCQUFPLEdBQVA7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBYztZQUNoRCxJQUFNLElBQUksR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHdCQUFVLEdBQVYsVUFBVyxNQUFjO1FBQ3ZCLElBQU0sUUFBUSxHQUFJLE1BQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBRSxNQUFjLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3BHLElBQU0sS0FBSyxHQUFHLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzVGLE9BQU8sSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFDSCxVQUFDO0FBQUQsQ0FBQyxBQW5ERCxJQW1EQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbGwgfSBmcm9tICcuL2NlbGwnO1xuaW1wb3J0IHsgQ29sdW1uIH0gZnJvbSAnLi9jb2x1bW4nO1xuaW1wb3J0IHsgRGF0YVNldCB9IGZyb20gJy4vZGF0YS1zZXQnO1xuXG5leHBvcnQgY2xhc3MgUm93IHtcblxuICBpc1NlbGVjdGVkOiBib29sZWFuID0gZmFsc2U7XG4gIGlzSW5FZGl0aW5nOiBib29sZWFuID0gZmFsc2U7XG4gIGNlbGxzOiBBcnJheTxDZWxsPiA9IFtdO1xuXG5cbiAgY29uc3RydWN0b3IocHVibGljIGluZGV4OiBudW1iZXIsIHByb3RlY3RlZCBkYXRhOiBhbnksIHByb3RlY3RlZCBfZGF0YVNldDogRGF0YVNldCkge1xuICAgIHRoaXMucHJvY2VzcygpO1xuICB9XG5cbiAgZ2V0Q2VsbChjb2x1bW46IENvbHVtbik6IENlbGwge1xuICAgIHJldHVybiB0aGlzLmNlbGxzLmZpbmQoZWwgPT4gZWwuZ2V0Q29sdW1uKCkgPT09IGNvbHVtbik7XG4gIH1cblxuICBnZXRDZWxscygpIHtcbiAgICByZXR1cm4gdGhpcy5jZWxscztcbiAgfVxuXG4gIGdldERhdGEoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZ2V0SXNTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc1NlbGVjdGVkO1xuICB9XG5cbiAgZ2V0TmV3RGF0YSgpOiBhbnkge1xuICAgIGNvbnN0IHZhbHVlcyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGF0YSk7XG4gICAgdGhpcy5nZXRDZWxscygpLmZvckVhY2goKGNlbGwpID0+IHZhbHVlc1tjZWxsLmdldENvbHVtbigpLmlkXSA9IGNlbGwubmV3VmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBzZXREYXRhKGRhdGE6IGFueSk6IGFueSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnByb2Nlc3MoKTtcbiAgfVxuXG4gIHByb2Nlc3MoKSB7XG4gICAgdGhpcy5jZWxscyA9IFtdO1xuICAgIHRoaXMuX2RhdGFTZXQuZ2V0Q29sdW1ucygpLmZvckVhY2goKGNvbHVtbjogQ29sdW1uKSA9PiB7XG4gICAgICBjb25zdCBjZWxsID0gdGhpcy5jcmVhdGVDZWxsKGNvbHVtbik7XG4gICAgICB0aGlzLmNlbGxzLnB1c2goY2VsbCk7XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVDZWxsKGNvbHVtbjogQ29sdW1uKTogQ2VsbCB7XG4gICAgY29uc3QgZGVmVmFsdWUgPSAoY29sdW1uIGFzIGFueSkuc2V0dGluZ3MuZGVmYXVsdFZhbHVlID8gKGNvbHVtbiBhcyBhbnkpLnNldHRpbmdzLmRlZmF1bHRWYWx1ZSA6ICcnO1xuICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIHRoaXMuZGF0YVtjb2x1bW4uaWRdID09PSAndW5kZWZpbmVkJyA/IGRlZlZhbHVlIDogdGhpcy5kYXRhW2NvbHVtbi5pZF07XG4gICAgcmV0dXJuIG5ldyBDZWxsKHZhbHVlLCB0aGlzLCBjb2x1bW4sIHRoaXMuX2RhdGFTZXQpO1xuICB9XG59XG4iXX0=