$(document).ready(function(){
  // your code here!
  $('#comment-list').html(new CommentList([]).render())

  $('#note-form').on('submit', appendCommentText)

})

const appendCommentText = function(event){
  event.preventDefault()
  // let comment_text = this.serialize()
  let comment_text = $('input').val()
  $('input[type=text]').val('')
  let comment_object = new Comment(comment_text)
  let formatted_comment_text = comment_object.render()
  $('#comment-list ul').append(formatted_comment_text)
}
