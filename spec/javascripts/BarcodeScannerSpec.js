// Generated by CoffeeScript 1.3.3
(function() {

  describe("Barcode Scanner", function() {
    it("is defined", function() {
      return expect(window.BarcodeScanner).toBeDefined();
    });
    it("puts a barcode scanner input to the last barcode-scanner-target", function() {
      var form;
      form = $("<form action='#'></form>");
      form.append($("<input data-barcode-scanner-target='' name='first'></input>"));
      form.append($("<input data-barcode-scanner-target='' name='second'></input>"));
      $("body").html(form);
      return expectSubmit(form, "first=&second=SPAPE", "second", "SPAPE", "SPAPE");
    });
    return it("puts a barcode scanner input to a focused element first", function() {
      var form;
      form = $("<form action='#'></form>");
      form.append($("<input data-barcode-scanner-target='' name='first'></input>"));
      form.append($("<input data-barcode-scanner-target='' name='second'></input>"));
      $("body").html(form);
      form.find("input[name='first']").focus();
      return expectSubmit(form, "first=SPAPE&second=", "first", "SPAPE", "SPAPE");
    });
  });

}).call(this);
