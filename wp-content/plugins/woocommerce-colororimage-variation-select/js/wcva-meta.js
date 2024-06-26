(function($){


        $('.wcvaheader').click(function(){

            $(this).nextUntil('tr.wcvaheader').slideToggle(100, function(){
          });
         });

         $('.subcollapsetr').click(function(){

           $(this).nextUntil('tr.subcollapsetr').slideToggle(100, function(){
          });
         });


        $(function() {
          $('.wcvadisplaytype').on('change',function(){
           zvalue= $(this).val();
	      if (zvalue == "colororimage") {
			  
             $(this).closest("div").find(".wcvametaupperdiv").show();
	         $(this).closest("div").find(".wcvaimageorcolordiv").show();
	 
	       } else if (zvalue == "variationimage") {
			   
			 $(this).closest("div").find(".wcvametaupperdiv").show();
	         $(this).closest("div").find(".wcvaimageorcolordiv").hide();
			 
		   } else{
			   
	         $(this).closest("div").find(".wcvametaupperdiv").hide();
	         $(this).closest("div").find(".wcvaimageorcolordiv").hide();
	       }
		   
          });
        });


	    /**
	     * hide/show shop swatches select on checkbox change
	     */
	    $(function() {

	    	$("#wcva_shop_swatches").click(function() {
                if($(this).is(":checked")) {
                   $("#wcva_shop_swatches_tr").show(300);
                   $(".wcvahoverimagediv").show(200);
                   
                 } else {
                   $("#wcva_shop_swatches_tr").hide(200);
                   $(".wcvahoverimagediv").hide(100);
                }
            });

	    });
    	
		 
		 $('.wcvacolororimage').on('change',function(){

		 	var parentId = $(this).attr('idval');

		 	
        
		    if (this.value == "Image") {
		 
		        $(this).closest("div").find(".wcvacolordiv").hide();
			    $(this).closest("div").find(".wcvatextblockdiv").hide();
			    $(".wcva_preview_color_"+parentId+"").hide();
		        $(".wcva_preview_textblock_"+parentId+"").hide();
		        $(this).closest("div").find(".wcvaimagediv").show();
		        $(".wcva_preview_image_"+parentId+"").show();
		        
		 
		    } else if (this.value == "Color") {
		     
		        $(this).closest("div").find(".wcvaimagediv").hide();
		        $(this).closest("div").find(".wcvatextblockdiv").hide();
		        $(".wcva_preview_image_"+parentId+"").hide();
		        $(".wcva_preview_textblock_"+parentId+"").hide();
			    $(this).closest("div").find(".wcvacolordiv").show();
			    $(".wcva_preview_color_"+parentId+"").show();
		  
		    } else if (this.value == "textblock") {
			 
			    $(this).closest("div").find(".wcvaimagediv").hide();
		        $(this).closest("div").find(".wcvacolordiv").hide();
		        $(".wcva_preview_image_"+parentId+"").hide();
		        $(".wcva_preview_color_"+parentId+"").hide();
			    $(this).closest("div").find(".wcvatextblockdiv").show();
			    $(".wcva_preview_textblock_"+parentId+"").show();
			}
         
		});


        $(".wcvacolordiv").each(function(){
		     $('.wcvaattributecolorselect').iris({
               hide: true,
               palettes: true,
               change: function(event, ui) {
        
                    
                    var parentId = $(this).attr('idval');
            	 
        
                    $(".colorpreviewdiv_"+parentId+"").css("background-color", ui.color.toString());
                }
             });

             
             $('.iris-picker').click(function() {
                $(this).hide();
             });

             $('.wcvaattributecolorselect').click(function() {
                $(this).next(".iris-picker").show();
             });


            
		});

		

		$(".wcvaattributetextblock").on("change paste keyup", function() {

			var parentId = $(this).attr('idval');

			$(".wcva_preview_textblock_"+parentId+"").text($(this).val());
                
        });



        
        //loads Media upload for each media upload input
        $(".image-upload-div").each(function(){
    	    var parentId = $(this).closest('div').attr('idval');
		 		 // Only show the "remove image" button when needed
		    var srcvalue    = $('.facility_thumbnail_id_' + parentId + '').val();
				
				if ( !srcvalue ){
				    jQuery('.remove_image_button_' + parentId + ' ').hide();
                }  
				// Uploading files
				var file_frame;

				jQuery(document).on( 'click', '.upload_image_button_' + parentId + ' ', function( event ){
                  
				   
					event.preventDefault();

					// If the media frame already exists, reopen it.
					if ( file_frame ) {
						file_frame.open();
						return;
					}

					// Create the media frame.
					file_frame = wp.media.frames.downloadable_file = wp.media({
						title: wcvameta.uploadimage,
						button: {
							text: wcvameta.useimage,
						},
						multiple: false
					});

					// When an image is selected, run a callback.
					file_frame.on( 'select', function() {
						attachment = file_frame.state().get('selection').first().toJSON();

						jQuery('.facility_thumbnail_id_' + parentId + '').val( attachment.id );
						jQuery('#facility_thumbnail_' + parentId + ' img').attr('src', attachment.url );
						jQuery('.imagediv_' + parentId + ' img').attr('src', attachment.url );
						jQuery('.remove_image_button_' + parentId + '').show();
						jQuery('.wcva_imgsrc_sub_header_' + parentId + '').attr('src', attachment.url );
					});

					// Finally, open the modal.
					file_frame.open();
				});

				jQuery(document).on( 'click', '.remove_image_button_' + parentId + '', function( event ){
				    
					jQuery('#facility_thumbnail_' + parentId + ' img').attr('src', wcvameta.placeholder );
					jQuery('.imagediv_' + parentId + ' img').attr('src', '');
					jQuery('.facility_thumbnail_id_' + parentId + '').val('');
					jQuery('.remove_image_button_' + parentId + '').hide();
					jQuery('.wcva_imgsrc_sub_header_' + parentId + '').attr('src', wcvameta.placeholder );
					return false;
				});
		 
	});				


     //loads Media upload for each media upload input
        $(".hover-image-upload-div").each(function(){
    	    var parentId2 = $(this).closest('div').attr('idval');
		 		 // Only show the "remove image" button when needed

		       var srcvalue2    = $('.hover_facility_thumbnail_id_' + parentId2 + '').val();
				

				if ( !srcvalue2 ){
				    jQuery('.hover_remove_image_button_' + parentId2 + '').hide();
                }  
				// Uploading files
				var file_frame;

				jQuery(document).on( 'click', '.hover_upload_image_button_' + parentId2 + ' ', function( event ){
                  
				    
					event.preventDefault();

					// If the media frame already exists, reopen it.
					if ( file_frame ) {
						file_frame.open();
						return;
					}

					// Create the media frame.
					file_frame = wp.media.frames.downloadable_file = wp.media({
						title: wcvameta.uploadimage,
						button: {
							text: wcvameta.useimage,
						},
						multiple: false
					});

					// When an image is selected, run a callback.
					file_frame.on( 'select', function() {
						attachment = file_frame.state().get('selection').first().toJSON();

						jQuery('.hover_facility_thumbnail_id_' + parentId2 + '').val( attachment.id );
						jQuery('#hover_facility_thumbnail_' + parentId2 + ' img').attr('src', attachment.url );
						jQuery('.hover_remove_image_button_' + parentId2 + '').show();
					});

					// Finally, open the modal.
					file_frame.open();
				});

				jQuery(document).on( 'click', '.hover_remove_image_button_' + parentId2 + '', function( event ){
				    
					jQuery('#hover_facility_thumbnail_' + parentId2 + ' img').attr('src', wcvameta.placeholder );
					jQuery('.hover_facility_thumbnail_id_' + parentId2 + '').val('');
					jQuery('.hover_remove_image_button_' + parentId2 + '').hide();
					return false;
				});
		 
	});				
		    
	     

})(jQuery); 


