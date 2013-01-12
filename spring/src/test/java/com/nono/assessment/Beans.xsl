<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html"/> 
  
	<xsl:template match="/">
		
    <html><body>
       <xsl:apply-templates/>
    </body></html>
  </xsl:template>

  <xsl:template match="/beans/bean">
    <h1 align="center"> <xsl:call-template name="htmLink" /> </h1>
  </xsl:template>

	<xsl:template name="htmLink">
		<xsl:element name="a">
			<xsl:attribute name="href">
        		http://www.baidu.com
      </xsl:attribute>
		</xsl:element>
	</xsl:template>
    
</xsl:stylesheet>