
class Carousel extends Page {
  subOptions;

  constructor(data) {
    super(data);

    this.subOptions = Object.assign({}, this.data.subOptions);
    this.subOptions[this.data.hash] = { "hash" : this.data.hash, rows: this.data.rows, title: this.data.title, index: 0, isThumbnailView: false };
    for (var subOption in this.subOptions) {
      this.subOptions[subOption].index = 0;
    }
  }

  renderThumbnailView() {
    var thumbnailGrid = $("<div>");
    thumbnailGrid.addClass("thumbnailGrid");

    for (var i in this.subOptions[getCurrentHash()].rows) {
      var imageData = this.subOptions[getCurrentHash()].rows[i];

      var thumbnailClick = function (event) { 
        this.setIndex(event.data.i); 
      }

      var thumbnail = $("<img>");
      thumbnail.attr("src", imageData.thumbnail || imageData.imageurl);
      thumbnail.addClass("thumbnail");
      thumbnail.on("click", {i}, thumbnailClick.bind(this));

      thumbnailGrid.append(thumbnail);
    }
      
    $("#page").append(thumbnailGrid);
  }

  renderCarouselView() {
    $("#carouselControlsContainer").empty();

    var carouselControlsContainer = $("<div>");
    carouselControlsContainer.attr("id", "carouselControlsContainer");

    var imageData = this.subOptions[getCurrentHash()].rows[this.subOptions[getCurrentHash()].index];

    var image = $("<img>");
    image.attr("src", imageData["imageurl"]);
    image.attr("id", "fullImage");

    var prevArea = $("<div>");
    prevArea.attr("id", "prevArea");
    prevArea.css("cursor", "w-resize")
    prevArea.on("click", this.prevIndex.bind(this));

    var nextArea = $("<div>");
    nextArea.attr("id", "nextArea");
    nextArea.css("cursor", "e-resize")
    nextArea.on("click", this.nextIndex.bind(this));

    $("#page").append(image);
   // $("#page").append(prevArea);
   // $("#page").append(nextArea);

    var detailsString = "";

    var imageDetails = $("<div>");
    imageDetails.addClass("imageDetailsContainer");

    if (imageData["title"] !== undefined) {
      var title = $("<div>");
      title.html(imageData["title"]);
      title.addClass("imageTitle");
      imageDetails.append(title);
    }

    if (imageData["medium"] !== undefined) {
      detailsString+=imageData["medium"]+" &#8226; "
    }

    if (imageData["dimensions"] !== undefined) {
      detailsString+=imageData["dimensions"]+" &#8226; "
    }

    if (imageData["year"] !== undefined) {
      detailsString+=imageData["year"]+" &#8226; "
    }

    if (detailsString !== "") {
      var details = $("<div>");
      details.html(detailsString.substring(0, detailsString.length-9));
      details.addClass("imageDetails");
      imageDetails.append(details);
    }

    if (imageData["description"] !== undefined) {
      var description = $("<div>");
      description.html(imageData["description"]);
      description.addClass("imageDescription");
    }

    var carouselIndexDisplay = $("<div>");
    carouselIndexDisplay.attr("id", "carouselIndexDisplay");
    carouselIndexDisplay.html((parseInt(this.subOptions[getCurrentHash()].index)+1)+" of "+parseInt(this.subOptions[getCurrentHash()].rows.length));


    var carouselControls = $("<div>");
    carouselControls.attr("id", "carouselControls");

    var carouselControlsPrev = $("<div>");
    carouselControlsPrev.html("&#171;");
    carouselControlsPrev.addClass("clickable");
    carouselControlsPrev.on("click", this.prevIndex.bind(this));

    var carouselControlsNext = $("<div>");
    carouselControlsNext.html("&#187;");
    carouselControlsNext.addClass("clickable");
    carouselControlsNext.on("click", this.nextIndex.bind(this));

    var carouselControlsShowThumbnails = $("<div>");
    carouselControlsShowThumbnails.html("Show Thumbnails");
    carouselControlsShowThumbnails.addClass("clickable");
    carouselControlsShowThumbnails.on("click", this.showThumbnails.bind(this));

    carouselControls.append(carouselControlsPrev);
    carouselControls.append(carouselIndexDisplay);
    carouselControls.append(carouselControlsNext);

    $("#carouselControlsContainer").append(imageDetails);
    $("#carouselControlsContainer").append(carouselControls);
    $("#carouselControlsContainer").append(carouselControlsShowThumbnails);


  }

  showThumbnails() {
    this.subOptions[getCurrentHash()].isThumbnailView = true;
    this.render()
  }

  prevIndex() {
    if (this.subOptions[getCurrentHash()].index === 0) {
      this.setIndex(this.subOptions[getCurrentHash()].rows.length - 1)
    } else {
      this.setIndex(this.subOptions[getCurrentHash()].index - 1);
    }
  }

  nextIndex() {
    this.setIndex((this.subOptions[getCurrentHash()].index + 1) % this.subOptions[getCurrentHash()].rows.length);
  }

  setIndex(index) {
    this.subOptions[getCurrentHash()].index = parseInt(index);
    this.subOptions[getCurrentHash()].isThumbnailView = false;
    this.render()
  }

  render() {
    this.setupPage();
    if (this.subOptions[getCurrentHash()].isThumbnailView) {
      this.renderThumbnailView();
    } else {
      this.renderCarouselView();
    }
  }
}