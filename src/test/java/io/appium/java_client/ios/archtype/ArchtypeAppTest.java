package io.appium.java_client.ios.archtype;

import io.appium.java_client.android.AndroidElement;
import io.appium.java_client.ios.IOSElement;
import org.junit.Assert;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runners.MethodSorters;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.List;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class ArchtypeAppTest extends ArchtypeAppIOSTest {

    private WebDriverWait waiting = new WebDriverWait(driver, 10000);
    private static final String iOSAutomationText = "show alert";


    @Test
    public void testSendKeys() {
        WebDriverWait wait = new WebDriverWait(driver, 20);

        IOSElement user = wait.until(
                driver1 ->  driver1.findElement(By.className("SantanderTextfield[name='Usernamefield']")));
        //IOSElement user = driver.findElement(By.xpath("//XCUIElementTypeTextField[@name=\"userField\"]"));
        //OK IOSElement user = driver.findElementByAccessibilityId("userField");
        //IOSElement user = driver.findElementByClassName("SantanderTextfield[name=\"Usernamefield\"]");
        user.sendKeys("Hanna");
        Assert.assertNotNull(user);

        /*driver.findElementById(BUNDLE_ID+":id/userField").sendKeys("Hanna");
        driver.findElementById(BUNDLE_ID+":id/test").sendKeys("111111");
        driver.findElementById(BUNDLE_ID+":id/loginButton").click();

        IOSElement titleText = (IOSElement) new WebDriverWait(driver, 30)
                .until(ExpectedConditions.visibilityOfElementLocated(By.id(BUNDLE_ID+":id/globalPositionHelloField")));

        System.out.println("title: "+titleText.getText());

        Assert.assertEquals(titleText.getText(), "Hello Hanna");

        driver.findElementById(BUNDLE_ID+":id/global_position").click();

        IOSElement globalPositionText = (IOSElement) new WebDriverWait(driver, 30)
                .until(ExpectedConditions.visibilityOfElementLocated(By.xpath("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.TextView")));

        System.out.println("title: "+globalPositionText.getText());

        Assert.assertEquals(globalPositionText.getText(), "Manage what to show on your Global Position");


        driver.findElementById(BUNDLE_ID+":id/menu_transactions").click();*/

    }}
