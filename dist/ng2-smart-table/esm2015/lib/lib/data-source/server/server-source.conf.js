export class ServerSourceConf {
    constructor({ endPoint = '', sortFieldKey = '', sortDirKey = '', pagerPageKey = '', pagerLimitKey = '', filterFieldKey = '', totalKey = '', dataKey = '' } = {}) {
        this.endPoint = endPoint ? endPoint : '';
        this.sortFieldKey = sortFieldKey ? sortFieldKey : ServerSourceConf.SORT_FIELD_KEY;
        this.sortDirKey = sortDirKey ? sortDirKey : ServerSourceConf.SORT_DIR_KEY;
        this.pagerPageKey = pagerPageKey ? pagerPageKey : ServerSourceConf.PAGER_PAGE_KEY;
        this.pagerLimitKey = pagerLimitKey ? pagerLimitKey : ServerSourceConf.PAGER_LIMIT_KEY;
        this.filterFieldKey = filterFieldKey ? filterFieldKey : ServerSourceConf.FILTER_FIELD_KEY;
        this.totalKey = totalKey ? totalKey : ServerSourceConf.TOTAL_KEY;
        this.dataKey = dataKey ? dataKey : ServerSourceConf.DATA_KEY;
    }
}
ServerSourceConf.SORT_FIELD_KEY = '_sort';
ServerSourceConf.SORT_DIR_KEY = '_order';
ServerSourceConf.PAGER_PAGE_KEY = '_page';
ServerSourceConf.PAGER_LIMIT_KEY = '_limit';
ServerSourceConf.FILTER_FIELD_KEY = '#field#_like';
ServerSourceConf.TOTAL_KEY = 'x-total-count';
ServerSourceConf.DATA_KEY = '';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLXNvdXJjZS5jb25mLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXNtYXJ0LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL2xpYi9kYXRhLXNvdXJjZS9zZXJ2ZXIvc2VydmVyLXNvdXJjZS5jb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sT0FBTyxnQkFBZ0I7SUFvQjNCLFlBQ0UsRUFBRSxRQUFRLEdBQUcsRUFBRSxFQUFFLFlBQVksR0FBRyxFQUFFLEVBQUUsVUFBVSxHQUFHLEVBQUUsRUFDakQsWUFBWSxHQUFHLEVBQUUsRUFBRSxhQUFhLEdBQUcsRUFBRSxFQUFFLGNBQWMsR0FBRyxFQUFFLEVBQUUsUUFBUSxHQUFHLEVBQUUsRUFBRSxPQUFPLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRTtRQUVoRyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFekMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFlBQVksQ0FBQztRQUMxRSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUM7UUFDbEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO1FBQ3RGLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDO1FBQzFGLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUNqRSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUM7SUFDL0QsQ0FBQzs7QUEvQnlCLCtCQUFjLEdBQUcsT0FBTyxDQUFDO0FBQ3pCLDZCQUFZLEdBQUcsUUFBUSxDQUFDO0FBQ3hCLCtCQUFjLEdBQUcsT0FBTyxDQUFDO0FBQ3pCLGdDQUFlLEdBQUcsUUFBUSxDQUFDO0FBQzNCLGlDQUFnQixHQUFHLGNBQWMsQ0FBQztBQUNsQywwQkFBUyxHQUFHLGVBQWUsQ0FBQztBQUM1Qix5QkFBUSxHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTZXJ2ZXJTb3VyY2VDb25mIHtcblxuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IFNPUlRfRklFTERfS0VZID0gJ19zb3J0JztcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBTT1JUX0RJUl9LRVkgPSAnX29yZGVyJztcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBQQUdFUl9QQUdFX0tFWSA9ICdfcGFnZSc7XG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgUEFHRVJfTElNSVRfS0VZID0gJ19saW1pdCc7XG4gIHByb3RlY3RlZCBzdGF0aWMgcmVhZG9ubHkgRklMVEVSX0ZJRUxEX0tFWSA9ICcjZmllbGQjX2xpa2UnO1xuICBwcm90ZWN0ZWQgc3RhdGljIHJlYWRvbmx5IFRPVEFMX0tFWSA9ICd4LXRvdGFsLWNvdW50JztcbiAgcHJvdGVjdGVkIHN0YXRpYyByZWFkb25seSBEQVRBX0tFWSA9ICcnO1xuXG4gIGVuZFBvaW50OiBzdHJpbmc7XG5cbiAgc29ydEZpZWxkS2V5OiBzdHJpbmc7XG4gIHNvcnREaXJLZXk6IHN0cmluZztcbiAgcGFnZXJQYWdlS2V5OiBzdHJpbmc7XG4gIHBhZ2VyTGltaXRLZXk6IHN0cmluZztcbiAgZmlsdGVyRmllbGRLZXk6IHN0cmluZztcbiAgdG90YWxLZXk6IHN0cmluZztcbiAgZGF0YUtleTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHsgZW5kUG9pbnQgPSAnJywgc29ydEZpZWxkS2V5ID0gJycsIHNvcnREaXJLZXkgPSAnJyxcbiAgICAgIHBhZ2VyUGFnZUtleSA9ICcnLCBwYWdlckxpbWl0S2V5ID0gJycsIGZpbHRlckZpZWxkS2V5ID0gJycsIHRvdGFsS2V5ID0gJycsIGRhdGFLZXkgPSAnJyB9ID0ge30pIHtcblxuICAgIHRoaXMuZW5kUG9pbnQgPSBlbmRQb2ludCA/IGVuZFBvaW50IDogJyc7XG5cbiAgICB0aGlzLnNvcnRGaWVsZEtleSA9IHNvcnRGaWVsZEtleSA/IHNvcnRGaWVsZEtleSA6IFNlcnZlclNvdXJjZUNvbmYuU09SVF9GSUVMRF9LRVk7XG4gICAgdGhpcy5zb3J0RGlyS2V5ID0gc29ydERpcktleSA/IHNvcnREaXJLZXkgOiBTZXJ2ZXJTb3VyY2VDb25mLlNPUlRfRElSX0tFWTtcbiAgICB0aGlzLnBhZ2VyUGFnZUtleSA9IHBhZ2VyUGFnZUtleSA/IHBhZ2VyUGFnZUtleSA6IFNlcnZlclNvdXJjZUNvbmYuUEFHRVJfUEFHRV9LRVk7XG4gICAgdGhpcy5wYWdlckxpbWl0S2V5ID0gcGFnZXJMaW1pdEtleSA/IHBhZ2VyTGltaXRLZXkgOiBTZXJ2ZXJTb3VyY2VDb25mLlBBR0VSX0xJTUlUX0tFWTtcbiAgICB0aGlzLmZpbHRlckZpZWxkS2V5ID0gZmlsdGVyRmllbGRLZXkgPyBmaWx0ZXJGaWVsZEtleSA6IFNlcnZlclNvdXJjZUNvbmYuRklMVEVSX0ZJRUxEX0tFWTtcbiAgICB0aGlzLnRvdGFsS2V5ID0gdG90YWxLZXkgPyB0b3RhbEtleSA6IFNlcnZlclNvdXJjZUNvbmYuVE9UQUxfS0VZO1xuICAgIHRoaXMuZGF0YUtleSA9IGRhdGFLZXkgPyBkYXRhS2V5IDogU2VydmVyU291cmNlQ29uZi5EQVRBX0tFWTtcbiAgfVxufVxuIl19