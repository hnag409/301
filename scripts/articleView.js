// Configure a view object, to hold all our functions for dynamic updates and article-related event handlers.
var articleView = {};

articleView.populateFilters = function() {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      var val = $(this).find('address a').text();
      var optionTag = '<option value="' + val + '">' + val + '</option>';
      $('#author-filter').append(optionTag);

      val = $(this).attr('data-category');
      optionTag = '<option value="' + val + '">' + val + '</option>';
      if ($('#category-filter option[value="' + val + '"]').length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

articleView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-author="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

articleView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $('article[data-category="' + $(this).val() + '"]').fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

articleView.handleMainNav = function() {
  $('.main-nav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });

  $('.main-nav .tab:first').click(); // Let's now trigger a click on the first .tab element, to set up the page.
};

articleView.setTeasers = function() {
  $('.article-body *:nth-of-type(n+2)').hide(); // Hide elements beyond the first 2 in any artcile body.

  $('#articles').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    $(this).parent().find('*').fadeIn();
    $(this).hide();
  });
};

articleView.initNewArticlePage = function() {
  // DONE: Ensure the main .tab-content area is revealed. We might add more tabs later.
  $('.tab-content').show();
  // TODO: The new articles we create will be copy/pasted into our source data file.
  // Set up this "export" functionality. We can hide it for now, and show it once we
  // have data to export. Also, let's add focus event to help us select the JSON.

  $('#new-form').keypress(function() {
    $('#export-field').css('display', 'block');
    // TODO: ADD IN HIGHLIGHT WHEN WE FIND JSON THING
  });

  // DONE: Add an event handler to update the preview and the export field if any inputs change.
  myObj = {};
  var articleTitle;
  var articleCategory;
  var articleAuthor;
  var articleAuthorURL;
  var articleBody;
  exportField = $('#export-field');

  $('#article-title').keydown(function() {
    articleTitle = $('#article-title').val();
    myObj.title = articleTitle;
    exportField.text(JSON.stringify(myObj));
    // $('#export-field').prepend(articleTitle);
    console.log(myObj);
  });

  $('#article-category').keydown(function() {
    articleCategory = $('#article-category').val();
    myObj.category = articleCategory;
    exportField.text(JSON.stringify(myObj));
    // $('#export-field').prepend(articleCategory);
    console.log(myObj);
  });

  $('#article-author').keydown(function() {
    articleAuthor = $('#article-author').val();
    myObj.author = articleAuthor;
    exportField.text(JSON.stringify(myObj));
    // $('#export-field').prepend(articleAuthor);
    console.log(myObj);
  });

  $('#article-author-url').keydown(function() {
    articleAuthorURL = $('#article-author-url').val();
    myObj.authorUrl = articleAuthorURL;
    exportField.text(JSON.stringify(myObj));
    // $('#export-field').prepend(articleAuthorURL);
    console.log(myObj);
  });

  $('#article-body').keydown(function() {
    articleBody = $('#article-body').val();
    myObj.body = articleBody;
    exportField.text(JSON.stringify(myObj));
    // $('#export-field').prepend(articleBody);
    console.log(myObj);
  });




};


articleView.create = function() {
  // TODO: Set up a var to hold the new article we are creating.
  // Clear out the #articles element, so we can put in the updated preview
  $('#articles').empty();

  // TODO: Instantiate an article based on what's in the form fields:

  // TODO: Use our interface to the Handblebars template to put this new article into the DOM:

  // TODO: Activate the highlighting of any code blocks:

  // TODO: Export the new article as JSON, so it's ready to copy/paste into blogArticles.js:
};


articleView.initIndexPage = function() {
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
};
