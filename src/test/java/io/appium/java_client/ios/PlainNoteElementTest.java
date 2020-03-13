package io.appium.java_client.ios;

import io.appium.java_client.MobileElement;
import org.junit.FixMethodOrder;
import org.junit.Ignore;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.WebDriverWait;

import javax.xml.bind.Element;

import java.util.List;

import static org.hamcrest.core.Is.is;
import static org.hamcrest.core.IsNot.not;
import static org.junit.Assert.*;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)

public class PlainNoteElementTest extends PlainNoteAppIOSTest {
    @Test
    public void findByNameTest() {
        assertNotNull(driver.findElementByName("Add"));
    }

    @Test
    public void findByXPath() {
        assertNotNull(driver.findElementByXPath("(//XCUIElementTypeButton[@name=\"chevron\"])[1]"));
    }

    @Test
    public void addItemTest() {
        WebDriverWait wait = new WebDriverWait(driver, 20);

        List<IOSElement> cells = wait.until(
                driver1 -> driver1.findElements(By.className("UITableViewCell")));

        int size = cells.size();
        /*driver.findElementByName("Add").click();
        driver.findElementByXPath("//XCUIElementTypeApplication[@name=\"PlainNote\"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeScrollView/XCUIElementTypeTextView").sendKeys("asd");
        //driver.findElementByName("Done").click();
        driver.findElementByName("Save").click();
        driver.findElementByName("Sync").click();

        IOSElement cellsAfter = driver.findElementByClassName("UITableViewCell");
*/
        assertEquals(11, size);
    }
}
