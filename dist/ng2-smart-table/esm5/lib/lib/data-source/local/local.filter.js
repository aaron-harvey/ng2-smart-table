export function filterValues(value, search) {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}
var LocalFilter = /** @class */ (function () {
    function LocalFilter() {
    }
    LocalFilter.filter = function (data, field, search, customFilter) {
        var filter = customFilter ? customFilter : filterValues;
        return data.filter(function (el) {
            var value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
            return filter.call(null, value, search);
        });
    };
    return LocalFilter;
}());
export { LocalFilter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYWwuZmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNvdXJjZS9sb2NhbC9sb2NhbC5maWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLFlBQVksQ0FBQyxLQUFhLEVBQUUsTUFBYztJQUN4RCxPQUFPLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDbEYsQ0FBQztBQUVEO0lBQUE7SUFVQSxDQUFDO0lBUlEsa0JBQU0sR0FBYixVQUFjLElBQWdCLEVBQUUsS0FBYSxFQUFFLE1BQWMsRUFBRSxZQUF1QjtRQUNwRixJQUFNLE1BQU0sR0FBYSxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1FBRXBFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEVBQUU7WUFDcEIsSUFBTSxLQUFLLEdBQUcsT0FBTyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssV0FBVyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RGLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQVZELElBVUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZmlsdGVyVmFsdWVzKHZhbHVlOiBzdHJpbmcsIHNlYXJjaDogc3RyaW5nKSB7XG4gIHJldHVybiB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBMb2NhbEZpbHRlciB7XG5cbiAgc3RhdGljIGZpbHRlcihkYXRhOiBBcnJheTxhbnk+LCBmaWVsZDogc3RyaW5nLCBzZWFyY2g6IHN0cmluZywgY3VzdG9tRmlsdGVyPzogRnVuY3Rpb24pOiBBcnJheTxhbnk+IHtcbiAgICBjb25zdCBmaWx0ZXI6IEZ1bmN0aW9uID0gY3VzdG9tRmlsdGVyID8gY3VzdG9tRmlsdGVyIDogZmlsdGVyVmFsdWVzO1xuXG4gICAgcmV0dXJuIGRhdGEuZmlsdGVyKChlbCkgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgZWxbZmllbGRdID09PSAndW5kZWZpbmVkJyB8fCBlbFtmaWVsZF0gPT09IG51bGwgPyAnJyA6IGVsW2ZpZWxkXTtcbiAgICAgIHJldHVybiBmaWx0ZXIuY2FsbChudWxsLCB2YWx1ZSwgc2VhcmNoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19