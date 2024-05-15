document.getElementById('phonenum').addEventListener('input', function() {
    var maxLength = 12;
    if(this.value.length > maxLength) {
      this.value = this.value.substring(0, maxLength);
    }
  });


  document.getElementById('numberguest').addEventListener('input', function() {
    var maxLength = 3;
    if(this.value.length > maxLength) {
      this.value = this.value.substring(0, maxLength);
    }
  });