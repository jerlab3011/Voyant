Ext.data.JsonP.termsradio({"guide":"<h1 id='termsradio-section-terms-radio'>Terms Radio</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/termsradio-section-overview'>Overview</a></li>\n<li><a href='#!/guide/termsradio-section-options'>Options</a></li>\n<li><a href='#!/guide/termsradio-section-see-also'>See Also</a></li>\n</ol>\n</div>\n\n<p>TermsRadio is a visualization that depicts the change of the frequency of words in a corpus (or within a single document).</p>\n\n<h2 id='termsradio-section-overview'>Overview</h2>\n\n<p>TermsRadio is intended to be used with a corpus that contain several documents and where the order of the documents is meaningful (such as chronological order); it can also be used with a single document that gets automatically segmented. It's designed to animate change over time by scrolling through the corpus with a selected window of documents (the number of documents visible at once).</p>\n\n<p>TermsRadio has several features contained in two main components:</p>\n\n<ul>\n<li>top navigation\n\n<ul>\n<li>a legend of terms that are currently selected (or selected by default), you can toggle selection by clicking on the terms in the legend</li>\n<li>an overview of the entire corpus with lines showing frequency trends for each selected words</li>\n<li>a white window that shows the currently visible documents in the main graph</li>\n</ul>\n</li>\n<li>main graph\n\n<ul>\n<li>each document is represented in a vertical column with top frequency terms plotted</li>\n<li>you can select terms by clicking on them (hovering over terms will indicate which one will be selected)</li>\n<li>the bottom x axis displays the document titles</li>\n<li>the left y axis displays the relative document frequencies</li>\n<li>the lines show the trends of the term frequencies for the visible documents</li>\n</ul>\n</li>\n</ul>\n\n\n<div style=\"max-width: 800px; margin-left: auto; margin-right: auto;\"><p><img src=\"guides/termsradio/termsradio.png\" alt=\"Termsradio\" width=\"3079\" height=\"1509\"></p></div>\n\n\n<h2 id='termsradio-section-options'>Options</h2>\n\n<p>You can control the \"play\" of TermsRadio with the <em>Back</em>, <em>Pause</em>, <em>Forward</em> and <em>Reset</em> buttons.</p>\n\n<p>Additional controls:</p>\n\n<ul>\n<li><strong>Scroll Duration</strong>: the number of milliseconds to take to scroll across available documents or document segments</li>\n<li><strong>Word Display</strong>: the total number of possible different words to use (i.e. not per document or per segment but in total)</li>\n<li><strong>Segements</strong>: when in single document mode, the number of segments to use for the document</li>\n<li><strong>Visible Segments</strong>: the number of segments to show in the main graph (the \"window\")</li>\n<li><strong>Search</strong>: add more terms to the graph</li>\n</ul>\n\n\n<h2 id='termsradio-section-see-also'>See Also</h2>\n\n<ul>\n<li><a href=\"#!/guide/start\">Getting Started</a></li>\n<li><a href=\"#!/guide/stopwords\">Stopwords</a></li>\n<li><a href=\"#!/guide/skins-section-default-skin\">Default Skin</a></li>\n<li><a href=\"#!/guide/tools\">List of Tools</a></li>\n</ul>\n\n","title":"Terms Radio"});