// My Scripts



//Spokane
$.simpleWeather({
    location: '99203',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.spokane .temp').text(weather.temp);
      $('.spokane .city').text(weather.city);
      $('.spokane img').attr('src', weather.image);
      $('.spokane .title').text(weather.title);
  
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p>No Weather</p>');
    }
  
  });

//Seattle
$.simpleWeather({
    location: '98105',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.seattle .temp').text(weather.temp);
      $('.seattle .city').text(weather.city);
      $('.seattle img').attr('src', weather.image);
      $('.seattle .title').text(weather.title);
  
      
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
        $('body').append('<p>No Weather</p>');
    }
  
  });
