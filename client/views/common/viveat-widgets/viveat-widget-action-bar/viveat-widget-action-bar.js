Template.viveatWidgetActionBar.onRendered(function(){
  console.log("viveatWidgetActionBar");
  ViveatWidgets && ViveatWidgets.fillWidget(this.data.widgetId);
});
