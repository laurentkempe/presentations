<!-- .slide: data-background-image="https://live.staticflickr.com/65535/49476819197_ce5559e3e6_o.jpg" -->

# [MAUI](https://devblogs.microsoft.com/dotnet/introducing-net-multi-platform-app-ui/)

## .NET Multi-platform App UI

by [Laurent Kempé](https://laurentkempe.com)

20 May 2020

<i class="fab fa-twitter"></i> [@laurentkempe](https://twitter.com/laurentkempe) - <i class="fab fa-github"></i> [@laurentkempe](https://github.com/laurentkempe)


---

# .NET MAUI ❓

🚀 A .NET UI framework for Multi-platform App UI 🚀

* .NET 5 ⏩ **unify the .NET platform**
* Runs on many devices across multiple platforms
 * Android, iOS, Windows and macOS
* Evolution **Xamarin.Forms toolkit** embracing the desktop, new devices such as the new Surface Duo
* **Native features** of each platform and **UI control**

---

### Single Project Dev Experience ❗

![MAUI Cross-platform development, simplified](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2020/05/maui-02.png)

---

### Developer Experience 💗

* Productivity in mind
* MVVM and XAML patterns & in future Model-View-Update (MVU) with C#, or even Blazor
* Visual Studio 2019, Visual Studio for Mac & Visual Studio Code

---

```xml
<StackLayout>
    <Label Text="Welcome to .NET MAUI!" />
    <Button Text="{Binding Text}" 
            Command="{Binding ClickCommand}" />
</StackLayout>
```

```csharp
public Command ClickCommand { get; }

public string Text { get; set; } = "Click me";

int count = 0;

void ExecuteClickCommand ()
{
    count++;
    Text = $"You clicked {count} times.";
}
```

---

### Timeline ⏰

* Previews later this year
* GA with .NET 6 in November of 2021
* [Roadmap](https://github.com/dotnet/maui/wiki/Roadmap)
* Xamarin.iOS and Xamarin.Android will become part of .NET 6 as .NET for iOS and .NET for Android

---

![Introducing .NET Multi-platform App UI](https://devblogs.microsoft.com/dotnet/wp-content/uploads/sites/10/2020/05/maui-01-overview.png)

---

# Thank You! 🚀

<!-- .slide: data-background-image="https://live.staticflickr.com/65535/49476819197_ce5559e3e6_o.jpg" -->

### [Laurent Kempé](https://laurentkempe.com)

