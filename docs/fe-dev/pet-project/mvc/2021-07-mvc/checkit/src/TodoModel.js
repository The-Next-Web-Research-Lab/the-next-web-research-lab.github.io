maria.Model.subclass(checkit, 'TodoModel', {
  properties: {
    _content: '',
    _isDone: false,
    getContent: function() {
      return this._content;
    },
    setContent: function(content) {
      content = checkit.trim('' + content);
      if (this._content !== content) {
        this._content = content;
        this.dispatchEvent({type: 'change'});
      }
    },
    isDone: function() {
      return this._isDone;
    },
    setDone: function(isDone) {
      isDone = !!isDone;
      if (this._isDone !== isDone) {
        this._isDone = isDone;
        this.dispatchEvent({type: 'change'});
      }
    },
    toggleDone: function() {
      this.setDone(!this.isDone());
    }
  }
});
