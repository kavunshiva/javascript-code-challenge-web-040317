class CommentList {
  constructor(comments_array) {
    this.comments_array = comments_array
  }

  render() {
    let formatted_comment_array = `<ul>`
    this.comments_array.forEach(function(comment){
      formatted_comment_array += comment.render()
    })
    formatted_comment_array += `</ul>`
    return formatted_comment_array
  }

  addComment(comment){
    this.comments_array.push(comment)
  }
}
