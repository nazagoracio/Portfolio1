
// Floating label headings for the contact form
$(function() {$("body")
 .on("input propertychange", ".form-item",function(e) {
  $(this).toggleClass("form-item-filled",!! $(e.target).val());})
 .on("focus", ".form-item",function() {
  $(this).addClass("form-item-focused");})
 .on("blur", ".form-item",function() {
  $(this).removeClass("form-item-focused");});
});